;(function (Vue, window, Todo) {
  // 一般在实例的代码中都是用来处理视图数据的
  // 这里对于处理本地存储的数据的代码更建议的做法是，单独提取到一个文件模块中来处理
  const app = new Vue({
    el: '#app',
    data: {
      seen: true,
      currentEdit: null,
      todos: Todo.getAll(),
      routerPath: '',
      filterTodos: [], // 备份 todos ，过滤 filterTodos 不会影响 todos
    },

    methods: {
      addTodo (e) {
        const title = e.target.value.trim()
          todos = this.todos,
          lastItem = todos[todos.length - 1]

        if (title.length === 0) return

        todos.push({
          id: lastItem ? lastItem.id + 1 : 1,
          title,
          done: false
        })
        e.target.value = ''
      },

      toggleAll (e) {
        const checked = e.target.checked
        this.todos.forEach(t => t.done = checked)
      },

      removeTodo (id) {
        // 根据 id 找到 todo 在 todos 中的索引
        // 然后根据索引从数据中删除一个数据项
        const todos = this.todos
        const removedIndex = todos.findIndex(t => t.id === id)
        removedIndex !== -1 && todos.splice(removedIndex, 1)
      },

      getEditting (todo) {
        this.currentEdit = todo
      },

      editTodo (todo, e) {
        todo.title = e.target.value
        this.cancelEdit()
      },

      cancelEdit () {
        this.currentEdit = null
      },

      clearAllDone () {
        // this.todos.forEach((t, i) => {
        //   t.done && this.todos.splice(i, 1)
        // })

        const todos = this.todos
        let len = todos.length

        for(let i = 0; i < len; i++) {
          todos[i].done && (todos.splice(i, 1), i--, len--)
        }
      },

      handleClick (e) {
        console.log(e)
        console.log('click me')
      }

      // 在 Mustache 语法中可以调用方法，放方法内部使用的数据成员发生变化，方法会被自动调用
      // getRemaningCount () {
      //   console.log('方法重新执行了')
      //   return this.todos.filter(t => !t.done).length
      // },
    },

    // 实例的指令，可以直接在被该实例管理的模板中使用
    directives: {
      // focus 叫做指令的名字
      // 在使用的时候，直接通过 v-自定义指令名称 来使用
      focus: {
        inserted (el, binding) {
          // Vue 要去对 DOM 模板进行二次编译
          // 这里是只有 inserted 的时候，DOM 才被插入进来了
          // 也就是说如果要操作获得焦点则必须写到 inserted 中才可以
          el.focus()
        }
      },
      todoFocus: {
        update (el, binding) {
          // 当 currentEdit === todo 为 true 的时候
          // 我就可以拿到当前双击的那个任务项的 input DOM 元素
          if (binding.value) {
            el.focus()
          }
        }
      },
      'my-on': {
        bind (el, binding) {
          console.log(binding)
          // if (binding.modifiers.prevent) {
          //   return false
          // }
          console.dir(el.preventDefault)
          el[`on${binding.arg}`] = binding.value
        }
      },

      'my-show': {
        bind (el, binding) {
          el.style.display = binding.value ? 'block' : 'none'
        },
        update (el, binding) {
          el.style.display = binding.value ? 'block' : 'none'
        }
      }
    },

    watch: {
      // watch 只能监视 data 和 computed 成员
      // 当被监视成员发生变化，watch 对应的函数将被执行
      // 如果监视的成员是对象或者数组，需要配置深度监视
      // 如果监视成员是普通成员，则不需要配置深度监视
      todos: {
        handler () {
          Todo.save(this.todos)
          // window.onhashchange()
          // 得到当前 hash
          // 根据 hash 筛选数据
          getFilterTodosByHash()
        },
        deep: true // 只有数组或者对象需要配置深度监视
      }
    },
    // 在 Vue 中， computed 被称之为计算属性
    // 通俗一点可以解释为：计算属性就是具有行为的属性
    // 计算属性写到 computed 中，本质是方法，但是只能当做属性来使用
    // 计算属性会缓存其结果
    // 只有当数据变了，才会重新执行
    computed: {
      remaningCount () {
        return this.todos.filter(t => !t.done).length
      },
      hasDone () {
        return this.todos.some(t => t.done)
      }
    },
    // filters: {
    //   // 过滤器虽然也可以用来解决该问题，但是在 Vue 中更推荐单纯处理字符串的时候使用自定义过滤器
    //   // 因为过滤器被设计的目的就是用来处理字符串的，所以其内部功能被限制了对Vue 实例 this 的访问
    //   // 例如：将一个时间戳处理成 年-月-日 时:分:秒 这个时候使用过滤器
    //   getRemaningCount (todos) {
    //     console.log('过滤器重新执行了')
    //     // return 123
    //     // console.log('方法重新执行了')

    //     // 注意：在过滤器中无法获取 data 中的数据成员
    //     // console.log(this.todos)
    //     return todos.filter(t => !t.done).length
    //   }
    // }
  })

    // 1. 监视 hashchange 事件
    // 2. hash 改变，拿到当前的 hash
    // 3. 根据不同的 hash 过滤显示不同的数据源

    // 该事件是只有当 hash 改变的时候才会执行
    // 默认页面第一加载进来，该事件是不会触发的
    function getFilterTodosByHash () {
      const hash = window.location.hash.substr(1)
      app.routerPath = hash
      switch (hash) {
        case '/active':
          // 显示所有 done 为 false 的 todos
          // 这里的 filterTodos 拿到的一个新的数据，获取的是部分 todos 数据
          // 这里的 filterTodos 和 todos 就是两个不用的数组了
          // 所以我往 todos 中添加一个任务项不会影响 filterTodos
          app.filterTodos = app.todos.filter(t => !t.done)
          break
        case '/completed':
          // 显示所有 done 为 true 的 todos
          app.filterTodos = app.todos.filter(t => t.done)
          break
        default:
          app.routerPath = '/'
          // filterTodos 拿到了 todos 的引用
          // 也就是说我对 todos 增删改查，都会影响 filterTodos
          app.filterTodos = app.todos
          break
      }
    }

    window.onhashchange = getFilterTodosByHash

    // 所以当页面初始化的时候，手动的调用一次
    getFilterTodosByHash()
})(Vue, window, Todo)

























// 为什么要在文件模块这里加一个匿名函数自执行
// 1. 命名空间冲突
// 2. 传递参数的目的是提高查找效率
// 3. 压缩的时候开业选择压缩形参，有效减少代码文件体积
// 4. 最重要的是用来声明当前文件模块的依赖
// 5. 前面加分号，为了避免上面代码没有分号导致的错误

// JavaScript Standard Style https://standardjs.com/readme-zhcn.html
// 当使用了无分号的代码风格之后，就需要在一些位置特殊注意
// 当一行是以 ( [ ` 三者其中之一开头的时候，则一定要在前面补个符号
