"use strict";!function(s){s(document).ready(function(){var e,n,t=s(".wn-plugins .themes"),i=t.isotope({filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1},layoutMode:"fitRows"}),a=s(".wn-plugins-categories a");e=i.isotope("getFilteredItemElements"),n=s(e),a.each(function(e,t){var i=s(t),t=i.attr("data-filter");t&&(t=n.filter(t).length,i.find(".wn-filter-count").text(t))}),a.on("click",function(){var e=s(this).attr("data-filter");t.isotope({filter:e,animationOptions:{duration:750,easing:"linear",queue:!1},layoutMode:"fitRows",fitRows:{gutter:39}});return!1}),s(".wn-plugins-categories").find("a").on("click",function(){var e=s(this);if(e.hasClass("selected"))return!1;e.parents(".wn-plugins-categories").find(".wn-plugin-selected").removeClass("wn-plugin-selected"),e.addClass("wn-plugin-selected")})})}(jQuery);