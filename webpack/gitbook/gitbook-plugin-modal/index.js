var className = 'gitbook-plugin-modal';

require(['gitbook'], function (gitbook) {


  gitbook.events.bind('page.change', function () {
    // 配置项
    var cfg = gitbook.state.config.pluginsConfig.modal || {};
    var html = cfg.html;
    var closeable = cfg.closeable;
    var excludeUrls = cfg.excludeUrls || [];

    var shouldClose = false;
    var $modal;
    var $bookBody = window.document.getElementsByClassName('book-body')[0];

    function closeModal() {
      if ($modal) {
        $modal.remove();
        $modal = null;
      }
      shouldClose = true;
    }

    function showModal(content, closeable) {
      if ($bookBody.getElementsByClassName('gitbook-plugin-modal').length > 0) {
        $bookBody.getElementsByClassName('gitbook-plugin-modal')[0].style.display = 'block';
        return;
      }
      $modal = window.document.createElement('div');
      $modal.style.left = $bookBody.offsetLeft + 'px';
      $modal.style.width = $bookBody.clientWidth + 'px';
      $modal.className = className;
      $modal.innerHTML = '<div class="gitbook-plugin-modal-content">' + content + '</div>';
      $bookBody.appendChild($modal);
      if (closeable) {
        $modal.onclick = closeModal;
      }
    }

    function checkModal() {
      if (shouldClose) {
        return;
      }
      // URL 检查
      for (var i = 0; i < excludeUrls.length; i++) {
        var exReg = new RegExp(excludeUrls[i], 'g');
        if (exReg.test(decodeURI(window.location.href))) {
          return;
        }
      }
      showModal(html, closeable);
    }

    // 事件监听检查
    $bookBody.addEventListener('scroll', checkModal);
    var $bodyInner = window.document.getElementsByClassName('body-inner')[0];
    $bodyInner.addEventListener('scroll', checkModal);
    window.document.getElementById('book-search-input').getElementsByTagName('input')[0].addEventListener('input', closeModal);
  });
});