"use strict";function Blocks(e,o){library=o,e(null,self=this)}var self=null,library=null,modules=null;Blocks.prototype.getBlock=function(e,o){var l={call:"blocks#getBlock",args:{id:e}};library.sandbox.sendMessage(l,o)},Blocks.prototype.getBlocks=function(e,o){var l={call:"blocks#getBlocks",args:{limit:e.limit,orderBy:e.orderBy,offset:e.offset,generatorPublicKey:e.generatorPublicKey,totalAmount:e.totalAmount,totalFee:e.totalFee,previousBlock:e.previousBlock,height:e.height}};library.sandbox.sendMessage(l,o)},Blocks.prototype.getHeight=function(e){var o={call:"blocks#getHeight",args:{}};library.sandbox.sendMessage(o,e)},Blocks.prototype.getFee=function(e){var o={call:"blocks#getFee",args:{}};library.sandbox.sendMessage(o,e)},Blocks.prototype.onBind=function(e){modules=e},module.exports=Blocks;