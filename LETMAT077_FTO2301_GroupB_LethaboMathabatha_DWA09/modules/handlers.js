/**
 * Handles search overlays by setting the "open" attribute of the 
 * element with the data-search-overlay attribute to false.
 *
 * @return {void} 
 */
export function handleSearchOverlays() {
    document.querySelector("[data-search-overlay]").open = false;
  }
  
  export function handleSettingsOverlays() {
    document.querySelector("[data-settings-overlay]").open = false;
  }
  
  export function handleHeaderSearchOverlays() {
    document.querySelector("[data-search-overlay]").open = true;
    document.querySelector("[data-search-title]").focus();
  }
  
  export function handleHeaderSettingsOverlays() {
    document.querySelector("[data-settings-overlay]").open = true;
  }  
  
  export function handleListOverlays() {
    document.querySelector("[data-list-active]").open = false;
  }

