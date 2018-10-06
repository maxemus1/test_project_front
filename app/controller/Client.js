Ext.define('Clients.controller.Client', {
    extend: 'Ext.app.Controller',
    stores: ['Client'],
    filteredValue: null,
    views: [
        'client.List',
        'client.Find'
    ],

    init: function () {

        this.control({
                'clientlist button[action=clientFind]': {
                    click: this.clientFind
                },

                'clientFind button[action=find]': {
                    click: this.findResultFilter
                },

                'clientFind button[action=clear]': {
                    click: this.clearFilter
                }

            }
        );
    },


    clientFind: function (button) {
        var view = Ext.widget('clientFind');
        view.down('form');
    },

    findResultFilter: function (button) {
        var win = button.up('window');
        form = win.down('form');
        this.filteredValue = form.getValues().ip;
        win.close();

        this.getClientStore().ipFilter(this.filteredValue);
        this.getClientStore().sync();
    },

    clearFilter: function (button) {
        this.filteredValue = null;
        this.getClientStore().ipFilter('');
    }


});