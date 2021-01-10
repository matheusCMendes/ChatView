chatParticipantsView() {
    this.viewOrRead = "view"
    let modal = this.modalCtrl.create(ParticipantsViewPage, {
      'viewOrRead': this.viewOrRead,
      'chatConversation': this.chatConversation
    });
    modal.present();
    modal.onDidDismiss(() => { });
  }

  chatParticipantsRead(chatMessage: ChatMessage) {
    this.viewOrRead = "read"


    if (chatMessage.sender.id == this.userLogged) {
      this.chatService.chatParticipants(chatMessage.id).subscribe(chatMessageReader => {
        this.chatMessageReaders = chatMessageReader;


        let modal = this.modalCtrl.create(ParticipantsViewPage, {
          'viewOrRead': this.viewOrRead,
          'infoViewMessage': this.chatMessageReaders
        });
        modal.present();
        modal.onDidDismiss(() => { });
      });
    }
  }
