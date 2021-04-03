$(function() {

  // 定義
  const spBreakPoint = 670;
  let headerTop = 40;
  let headerHeight = 0;

  if ($(window).width() > spBreakPoint) {
    headerHeight = 620;
  } else {
    headerHeight = 355;
  }

  // ヘッダー（スクロール）
  $(window).scroll(function() {
    // 固定
    if ($(window).width() > spBreakPoint) {
      if ($(this).scrollTop() > headerTop) {
        $('.header__nav').addClass('position-change');
      } else {
        $('.header__nav').removeClass('position-change');
      }
    }

    // 背景色変更
    if ($(this).scrollTop() > headerHeight) {
      $('.header__nav').addClass('color-change');
    } else {
      $('.header__nav').removeClass('color-change');
    }

  });


  // ハンバーガーメニュー
  $('#hamburger-menu').click(function() {
    $('.header-menu').toggleClass('height-change');
    $('.hamburger-menu').toggleClass('active');
  });
  $('.header__menu__item').click(function() {
    $('.header-menu').toggleClass('height-change');
    $('.hamburger-menu').toggleClass('active');
  });

});