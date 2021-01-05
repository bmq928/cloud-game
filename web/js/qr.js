const qr = (($, room) => {
  return {
    show: () => {
      const link = room.getLink()
      const url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + link
      $('#barcode').attr('src', url)
      $('#barcode').modal()
    }
  }
})($, room)