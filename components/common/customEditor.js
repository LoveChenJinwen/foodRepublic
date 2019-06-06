// components/common/customEditor.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    image: '',
    title: "",
    loading: false,
    nodeList: [],
    textBufferPool: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit: function() {
      this.setData({
        loading: true
      })
      setTimeout(()=>{
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
        this.setData({
          loading: false
        })
      },2000)
      console.log(this.data.textBufferPool)
    },
    // 添加文本
    addText: function() {
      this.writeBuff();
      const nodeList = this.data.nodeList;
      nodeList.push({
        name: 'text',
        message: ""
      })
      this.setData({
        nodeList
      })
    },
    // 缓存写入
    writeBuff: function() {
      const textBufferPool = this.data.textBufferPool;
      const nodeList = this.data.nodeList;
      nodeList.forEach((node, index) => {
        if (node.name === 'text') {
          node.message = textBufferPool[index];
        }
      })
      this.setData({
        nodeList,
      })
    },
    delText: function(e) {
      this.writeBuff();
      const nodeList = this.data.nodeList;
      const index = e.currentTarget.dataset.index;
      let textBufferPool = this.data.textBufferPool;
      nodeList.splice(index, 1);
      textBufferPool.splice(index, 1);
      this.setData({
        nodeList,
        textBufferPool,
      })
    },
    delImage: function(e) {
      this.writeBuff();
      const nodeList = this.data.nodeList;
      const index = e.currentTarget.dataset.index;
      let textBufferPool = this.data.textBufferPool;
      nodeList.splice(index, 1);
      textBufferPool.splice(index, 1);
      this.setData({
        nodeList,
        textBufferPool,
      })
    },
    // 添加图片
    addImage: function() {
      this.writeBuff();
      wx.chooseImage({
        success: res => {
          const tempFilePath = res.tempFilePaths[0];
          console.log(tempFilePath)
          wx.getImageInfo({
            src: tempFilePath,
            success: res => {
              const node = {
                name: 'img',
                message: tempFilePath
              }
              let nodeList = this.data.nodeList;
              nodeList.push(node);
              this.setData({
                nodeList
              })
            }
          })
        },
      })
    },
    loadImage: function() {
      wx.chooseImage({
        success: res => {
          const tempFilePath = res.tempFilePaths[0];
          this.setData({
            image: tempFilePath
          })
        }
      })
    },
    onTextareaInput: function(e) {
      const index = e.currentTarget.dataset.index;
      let textBufferPool = this.data.textBufferPool;
      textBufferPool[index] = e.detail;
      this.setData({
        textBufferPool,
      })
    }
  }
})
