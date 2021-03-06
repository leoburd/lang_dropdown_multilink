  ------------------------------------------------------------------------------------
                                      DESCRIPTION
  ------------------------------------------------------------------------------------

  This module is similar to https://drupal.org/project/lang_dropdown but with support
  for multilink redirection (https://drupal.org/project/multilink)
 
  IMPORTANT: Due to multilink's "bypass multilink redirect" permission, this module is
  not going to work for administrators and anyone else who has got that permission set!
  DON'T FORGET TO LOGOUT before testing this module!

  ------------------------------------------------------------------------------------
                                      INSTALLATION
  ------------------------------------------------------------------------------------

  This module requires optional core modules: "Locale" and "Content translation".
  The module will populate a new block named "Language switcher dropdown" under "{host}/admin/structure/block".
  
  Please see the below instructions to configure the block.

  ------------------------------------------------------------------------------------
                                      CONFIGURATION
  ------------------------------------------------------------------------------------

  1) Configure the "Language negotiation" at "{host}/admin/config/regional/language/configure".
     
  2) Enable the "Language switcher dropdown" block at "{host}/admin/structure/block".
  
  3) Configure the "Language switcher dropdown" block settings as follows:
     - "Output as HTML and JavaScript widget instead of HTML select element"
        The option will allow you to display the widget using themable HTML and JavaScript widget instead of the default select element.
