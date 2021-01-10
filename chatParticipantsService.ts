chatParticipants(idMessage: number): Observable<ChatMessageReaders[]>{
   
  return Observable.fromPromise(this.storage.get('userSessionApi')).flatMap((userSessionApi: UserSessionApi) => {
    let options = new RequestOptions();
    options.headers = new Headers({ 'authorization':  userSessionApi != null ? userSessionApi.token : '',
    'chatMessageId': String(idMessage)});

    return this.http.get(this.URL_RESOURCE + 'message/readers', options)
    .map(res => res.json());
  });
}
