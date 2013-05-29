(function ($) {
Drupal.behaviors.lang_dropdown_multilink = {
  attach: function (context, settings) {
    var settings = settings || Drupal.settings;

    if (settings.lang_dropdown_multilink) {
      var flags = settings.lang_dropdown_multilink.jsWidget.languageicons;
      if (flags) {
        $.each(flags, function(index, value) {
          $('select.lang-dropdown-select-element option[value="' + index + '"]').attr('title', value);
        });
      }
      var msddSettings = settings.lang_dropdown_multilink.jsWidget;

      $('select.lang-dropdown-select-element').msDropDown({
        visibleRows: msddSettings.visibleRows,
        rowHeight: msddSettings.rowHeight,
        animStyle: msddSettings.animStyle,
        mainCSS: msddSettings.mainCSS
      });
    }

    try {
      $('select.lang-dropdown-select-element').change(function() {
        var lang = this.options[this.selectedIndex].value;
        var href = $(this).parents('form').find('input[name="' + lang + '"]').val();
        window.location.href = href;
      });
    } catch (e) {
      if (console) { console.log(e); }
    }

    $('form#lang-dropdown-form').after('<div style="clear:both;"></div>');
  }
};
})(jQuery);
