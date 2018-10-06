Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'Clients',
    
    controllers: [
        'Client'
    ],
    
    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {

            items: [
                {
                    width: 700,
                    height: 700,
                    xtype: 'clientlist'
                }
            ]
        });
    }
});