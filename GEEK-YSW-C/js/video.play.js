 var Intent = plus.android.importClass("android.content.Intent");
    var Uri = plus.android.importClass("android.net.Uri");
    var main = plus.android.runtimeMainActivity();
    var intent=new Intent(Intent.ACTION_VIEW);
    var uri=Uri.parse("网络视频地址");
    intent.setDataAndType(uri,"video/*");
    main.startActivity(intent);