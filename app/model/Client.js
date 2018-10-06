Ext.define('Clients.model.Client', {
    extend: 'Ext.data.Model',
    fields: ['ip','browser', 'os','from_url', 'to_url', 'count_url']
});