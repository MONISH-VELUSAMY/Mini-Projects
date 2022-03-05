from tkinter import *
from pytube import YouTube
root=Tk()
root.title('Youtube Downloader')
root.geometry('500x500')
root.resizable(0,0)
link=StringVar()
Label(root,text='paste the link:',font='Courier 22 bold').place(x=160,y=60)
link_enter=Entry(root,width=50,textvariable=link).place(x=30,y=90)
def downloader():
    url=YouTube(str(link.get()))
    videos=url.streams.first()
    videos.download()
    Label(root,text='DOWNLOADED',font='Courier 22 bold').place(x=180,y=210)

Button(root,text='Download',command=downloader,bg='red').place(x=180,y=150)


root.mainloop()
    
                
