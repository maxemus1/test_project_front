var ConfigStore = Ext.create('Clients.config.Client');

Ext.define('Clients.store.Client', {
    extend: 'Ext.data.Store',
    alias : 'widget.clientList',
    model: 'Clients.model.Client',
    autoLoad: true,

    ipFilter: function (ip) {
        Ext.data.Store.prototype.clearFilter.call(this);
        Ext.data.Store.prototype.filter.call(this, 'ip', ip);
    },

    proxy: {
        type: 'ajax',

        api: {
            read: ConfigStore.host,
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});