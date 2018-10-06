Ext.define('Clients.view.client.List' ,{
    extend: 'Ext.grid.Panel',
    store: 'Client',
    title : 'Clients',
    alias : 'widget.clientlist',

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            iconCls: 'find_ip',
            text: 'Find',
            action: 'clientFind'
        }]
    }],

    initComponent: function() {

        this.columns = [
            {header: 'ip',  dataIndex: 'ip',  flex: 1},
            {header: 'browser',  dataIndex: 'browser',  flex: 1},
            {header: 'os',  dataIndex: 'os',  flex: 1},
            {header: 'url_start', dataIndex: 'from_url', flex: 1},
            {header: 'url_end', dataIndex: 'to_url', flex: 1},
            {header: 'count_url', dataIndex: 'count_url', flex: 1}
        ];

        this.callParent(arguments);
    }
});