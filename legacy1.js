let interval = setInterval(() => {
    if (typeof(BAWK) === "undefined" || !BAWK.sounds || !Object.keys(BAWK.sounds)) return;
    clearInterval(interval);
    BAWK.load("https://cdn.jsdelivr.net/gh/InfiniteSmasher/Legacy-Mode@latest/sounds1.json");
    extern.catalog.findItemsByIds([3000, 3100, 3400, 3600, 3800, 4000, 4200]).forEach(item => {
        item.name = item.name.replace(" ", " Legacy ");
        item.item_data.meshName += "_Legacy";
    });
}, 250);
