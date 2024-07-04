#CREATE LOGIN PAGE
'''--------------------------------------------------------------------------------------------------------------------------------------------'''
from tkinter import *


#add gui windows
window=Tk()
window.geometry("400x400")
label_font = ('Helvetica', 12, 'bold')

s=Label(window,text=' ')
s.grid(row=0,column=1)
#add widgets
#name
l=Label(window,text='USER NAME:',font=label_font)
l.grid(row=1,column=1,sticky=W,pady=10)
a=StringVar()
e=Entry(window,text=a,width=30)
e.grid(row=1,column=2)

s=Label(window,text=' ')
s.grid(row=2,column=1)
'''----------------------------------------------------------------------------------------------------------------------------------------------'''
#password
ll=Label(window,text="Password:",font=label_font,pady=10)
ll.grid(row=3,column=1,sticky=W)
c=StringVar()
ee=Entry(window,show='.',text=c,width=30)
ee.grid(row=3,column=2)

s1=Label(window,text=' ')
s1.grid(row=4,column=1)
'''--------------------------------------------------------------------------------------------------------------------------------------------'''
#email id
l2=Label(window,text="EMAIL:",font=label_font,pady=10)
l2.grid(row=5,column=1,sticky=W)
b=StringVar()
e2=Entry(window,text=b,width=30)
e2.grid(row=5,column=2)

s2=Label(window,text=' ')
s2.grid(row=6,column=1)
'''-------------------------------------------------------------------------------------------------------------------------------------------'''
#Login button

def act():
    x=a.get()
    y=b.get()
    z=c.get()
    print('Name: ',x)
    print('Password: ',y)
    print('Email: ',z)
    btn.config(bg="green", fg="white")

   
btn=Button(window,text="Login",command=act,bg="red",fg="white",height=2,width=10)
btn.grid(row=7,column=2)
 
s3=Label(window,text=' ')
s3.grid(row=8,column=1)
'''--------------------------------------------------------------------------------------------------------------------------------------------'''
#CLEAR BUTTON

def clear_fields():
    a.set("")  # Clearing the Entry widgets
    c.set("")
    b.set("")



clear_btn = Button(window, text="Clear", command=clear_fields,bg="blue",fg="white",height=2, width=10)
clear_btn.grid(row=9, column=2)

#main loop
window.mainloop()
