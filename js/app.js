;(function (Vue) {
  new Vue({
    el: '#app',
    data: {
      currentEdit: null,
      todos: [
        { id: 1, title: '吃饭', done: true },
        { id: 2, title: '睡觉', done: false },
        { id: 3, title: '写代码', done: false },
        { id: 4, title: '打豆豆', done: true }
      ]
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
      }

      // 在 Mustache 语法中可以调用方法，放方法内部使用的数据成员发生变化，方法会被自动调用
      // getRemaningCount () {
      //   console.log('方法重新执行了')
      //   return this.todos.filter(t => !t.done).length
      // },
    },
    // 在 Vue 中， computed 被称之为计算属性
    // 通俗一点可以解释为：计算属性就是具有行为的属性
    // 计算属性写到 computed 中，本质是方法，但是只能当做属性来使用
    // 计算属性会缓存其结果
    // 只有当数据变了，才会重新执行
    computed: {
      remaningCount () {
        return this.todos.filter(t => !t.done).length
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
})(Vue)

























// 为什么要在文件模块这里加一个匿名函数自执行
// 1. 命名空间冲突
// 2. 传递参数的目的是提高查找效率
// 3. 压缩的时候开业选择压缩形参，有效减少代码文件体积
// 4. 最重要的是用来声明当前文件模块的依赖
// 5. 前面加分号，为了避免上面代码没有分号导致的错误

// JavaScript Standard Style https://standardjs.com/readme-zhcn.html
// 当使用了无分号的代码风格之后，就需要在一些位置特殊注意
// 当一行是以 ( [ ` 三者其中之一开头的时候，则一定要在前面补个符号
