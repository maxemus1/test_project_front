Ext.define('Clients.view.client.Find', {
    extend: 'Ext.window.Window',
    alias : 'widget.clientFind',

    title : 'Filter by ip',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'ip',
                        fieldLabel: 'ip'
                    },
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'find'
            },
            {
                text: 'Clear',
                action: 'clear'
            }
        ];

        this.callParent(arguments);
    }
});