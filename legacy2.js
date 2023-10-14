const sounds = ["ammo", "gun_cluck9mm_fire", "gun_cluck9mm_insert_mag", "gun_cluck9mm_remove_mag", "gun_csg1_fire", "gun_csg1_pull_action", "gun_csg1_release_action", "gun_dozenGauge_close", "gun_dozenGauge_fire", "gun_dozenGauge_load", "gun_dozenGauge_open", "gun_eggk47_dry_fire", "gun_eggk47_fire", "gun_eggk47_full_cycle", "gun_eggk47_insert_mag", "gun_eggk47_remove_mag", "grenade", "grenade_beep", "grenade_pin", "weapon_swap", "gun_m24_bolt_close", "gun_m24_bolt_open", "gun_m24_fire", "pickup", "gun_rpegg_load", "gun_rpegg_rocket_fly", "gun_rpegg_rocket_hit", "gun_smg_cycle", "gun_smg_fire"];
window.switchSounds = (x) => { sounds.forEach(s => BAWK.sounds[s] = BAWK.sounds[`${s}_${(x) ? 'Legacy' : 'Default'}`]); }

let legacyInitInterval = setInterval(() => {
    if (typeof(BAWK) === "undefined" || !BAWK.sounds || !Object.values(BAWK.sounds) || !Object.values(BAWK.sounds)[0] || !Object.values(BAWK.sounds)[0].buffer) return;
    clearInterval(legacyInitInterval);
    sounds.forEach(s => BAWK.sounds[`${s}_Default`] = BAWK.sounds[s]);
    BAWK.load("https://cdn.jsdelivr.net/gh/InfiniteSmasher/Legacy-Mode@latest/sounds2.json");
    let storedVal = localStore.getItem("legacySFXEnabled");
    storedVal = (storedVal) ? (storedVal == 'true') : true;
    setTimeout(window.switchSounds, 3000, storedVal);
    vueData.loc.p_settings_legacy_sfx = "Legacy Sound Effects";
    vueData.settingsUi.togglers.misc.push({ id: 'legacySFX', locKey: 'p_settings_legacy_sfx', value: storedVal });
    extern.catalog.findItemsByIds([3000, 3100, 3400, 3600, 3800, 4000, 4200]).forEach(item => {
        item.name = item.name.replace(" ", " Legacy ");
        item.item_data.meshName += "_Legacy";
    });
    let oldToggleFunc = vueApp.$refs.settings.onSettingToggled;
    vueApp.$refs.settings.onSettingToggled = (id, value) => {
        if (id === 'legacySFX') {
            window.switchSounds(value);
            localStore.setItem("legacySFXEnabled", value);
            BAWK.play("ammo");
        }
        oldToggleFunc(id, value);
    };
    let oldLocFunc = vueApp.setLocData;
    vueApp.setLocData = (languageCode, newLocData) => {
        oldLocFunc(languageCode, newLocData);
        vueData.loc.p_settings_legacy_sfx = "Legacy Sound Effects";
    }
}, 250);
