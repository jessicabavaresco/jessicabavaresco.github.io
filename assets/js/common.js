$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('button.abstract, button.bibtex').click(function() {
    const entry = $(this).parent().parent();
    const panel = document.getElementById(this.getAttribute('aria-controls'));
    const opening = this.getAttribute('aria-expanded') !== 'true';
    entry.find('.abstract.hidden, .bibtex.hidden').removeClass('open');
    entry.find('button.abstract, button.bibtex').attr('aria-expanded', 'false');
    $(panel).toggleClass('open', opening);
    $(this).attr('aria-expanded', String(opening));
  });
  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});
