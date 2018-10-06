//Фаил конфигурации

Ext.define('Clients.config.Client',
    {
        //Хост на котором находится бекенд
        host:'http://localhost:8000/api/data'
    }
);

Ext.Ajax.cors = true;
Ext.Ajax.useDefaultXhrHeader = false;
Ext.Ajax.async = true;

