<template>
    <div>
        <div ref="pdfShow">
            <canvas v-for="item in numPages" style="margin-bottom: 10px;"></canvas>
        </div>
    </div>
</template>

<script>

// import PDFJS from 'pdfjs-dist'

export default {
  data() {
    return {
      // src: '../../../../static/1201711272201344510220870142_201712281812415670220730091_201712281812416740220447729.PDF',
      // staticSrc: require('./../../../../static/banner1.jpg'),
      winWidth: 0,
      winHeight: 0,
      sX: 1,
      sY: 1,
      numPages: 0
    }
  },
  props: {
    pdfUrl: String
  },
  mounted() {
    // var pdfFile = new PDFJS.PDFWorker()
    // console.log(pdfFile)
    // PDFJS.workerSrc = '../build/pdf.worker.js'
    let $this = this
    $this.getWinSize()
    let numPages = 1
    window.pdfjsLib.cMapUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.550/cmaps/'
    window.pdfjsLib.cMapPacked = true
    window.pdfjsLib.getDocument($this.pdfUrl).then((pdf) => {
      // 获取第一页数据
      //
      $this.numPages = pdf.numPages
      for (var i = 0; i < pdf.numPages; i++) {
        let curPage = i + 1
        pdf.getPage(curPage).then(function (page) {
          let scale = 1
          // 缩放
          let viewportmax = page.getViewport(scale)
          var canvas = $this.$refs.pdfShow.children[curPage - 1]
          var context = canvas.getContext('2d')

          var viewWidth = $this.winWidth
          var viewHeight = viewportmax.height

          if ($this.winWidth < viewportmax.width) {
            $this.sX = $this.winWidth / viewportmax.width
            viewWidth = viewportmax.width
            $this.ifscale = false
          }
          // transform: scale(x,y)
          var viewport = page.getViewport(scale)

          //
          // Prepare canvas using PDF page dimensions
          //
          // var canvas = document.getElementById('the-canvas')

          // canvas.style.transform = 'scale(' + $this.sX + ')' // 不用canvas scale缩放，会模糊
          canvas.width = viewWidth
          canvas.height = viewHeight

          // context.save()

          canvas.style.transform = 'scale(' + $this.sX + ')'

          // context.scale($this.sX, $this.sX)

          let cLX = (viewWidth - viewWidth * $this.sX) / 2
          let cLY = viewWidth - viewWidth * $this.sX / 2
          let cRX = (viewHeight - viewHeight * $this.sX) / 2
          let cRY = viewHeight - viewHeight * $this.sX / 2

          console.log(cLX)

          let imageData = context.getImageData(cLX, cLY, viewWidth, viewHeight)

          // context.clearRect(cLX, cLY, viewWidth, viewHeight)

          // context.save()

          // canvas.style.transform = 'scale(' + $this.sX + ')'
          // context.scale($this.sX, $this.sX)
          // canvas.width = viewWidth * $this.sX
          // canvas.height = viewHeight * $this.sX

          // context.restore()

          // canvas.width = viewWidth * $this.sX
          // canvas.height = viewHeight * $this.sX

          // context.putImageData(imageData, 0, 0)

          // canvas.style.transform = 'scale(' + scaleX + ')'

          //
          // Render PDF page into canvas context
          //
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          }
          page.render(renderContext)
        })
      }

    })
    /* var loadingTask = pdf.createLoadingTask('http://cdn.mozilla.net/pdfjs/tracemonkey.pdf')
        console.log(loadingTask)
        this.src = loadingTask
        this.src.then(pdf => {
            this.numPages = pdf.numPages
        }) */
  },
  methods: {
    getWinSize () {
      let $this = this
      if (window.innerWidth) {
        $this.winWidth = window.innerWidth
      } else if ((document.body) && (document.body.clientWidth)) {
        $this.winWidth = document.body.clientWidth // 获取窗口高度
      }
      if (window.innerHeight) {
        $this.winHeight = window.innerHeight
      } else if ((document.body) && (document.body.clientHeight)) {
        $this.winHeight = document.body.clientHeight // 通过深入Document内部对body进行检测，获取窗口大小
      }
      if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        $this.winHeight = document.documentElement.clientHeight
        $this.winWidth = document.documentElement.clientWidth
      }
    }
  },
  created () {
    // console.log(window.pdfjsLib)
  }
}
</script>
