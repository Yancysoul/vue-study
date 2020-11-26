
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('set:' + val);
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // 防止重新赋值的为对象
        observe(newVal)
        console.log('get:' + newVal);
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  new Observer(obj)
}

class Observer {
  constructor(value) {
    this.value = value
    this.walk(value)
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

class Compiler {
  constructor(el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm
    this.compile(this.$el)
  }

  compile(el) {
    // console.log(el.childNodes);
    el.childNodes.forEach(node => {
      if (node.nodeType === 1) {
        // console.log('元素', node);
        this.compileElement(node)
      } else if (this.isInter(node)) {
        // console.log('文本', node);
        // console.log(RegExp.$1);
        this.compileText(node)
      }
      this.compile(node)
    })
  }

  compileElement(node) {
    Array.from(node.attributes).forEach(attr => {
      if (attr.name.indexOf('v-') === 0) {
        console.log(attr);
        console.log(attr.name);
        console.log(attr.value);
      }
    })
  }

  compileText(node) {
    node.textContent = this.$vm[RegExp.$1]
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}

function proxy(vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(v) {
        vm.$data[key] = v
      }
    })
  })
}

class KVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    proxy(this)
    new Compiler('#app', this)
  }
}