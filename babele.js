Hooks.once('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'fallout_zh-TW',
            lang: 'zh-TW',
            dir: 'compendium'
        });
    }
});

