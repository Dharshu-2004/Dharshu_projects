class Node{
    int data;
    Node next;
    Node(int data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    Node head,tail;
    public void insertEnd(int data){
        Node node = new Node(data);
        if(head==null){
            head=node;tail=node;
        }
        else{
            tail.next=node;
            tail=node;
        }
    }
    public void insertBeging(int data){
        Node node = new Node(data);
        if(head==null){
            head=node;tail=node;
        }
        else{
            node.next=head;
            head=node;
        }
        
    }
    public void insertMiddle(int p,int data){
        Node node = new Node(data);
            if(head==null){
                head=node;tail=node;
            }
            else{
                Node temp=head;
                for(int i=1;i<p;i++){
                    temp=temp.next;
                }
                node.next=temp.next;
                temp.next=node;
            }
        
    }
    public void display(){
        if(head==null){
            System.out.println("THe List is Empty");
        }
        else{
            Node temp=head;
            while(temp!=null){
                System.out.print(temp.data+" ");
                temp=temp.next;
            }
        }
    }
    public void search(int d){
        Node temp=head;int count=1;boolean flag=false;
        while(temp!=null){
            if(temp.data==d){
                System.out.println("\n The Node found in "+count);
                flag=true;
            }
            temp=temp.next;count++;
        }
    }
    public void middleElement(){
        if(head==null){
            System.out.println("The List is Empty");
        }
        else{
            Node slow=head;Node fast=head;
            while(fast!=null && fast.next!=null){
                slow=slow.next;
                fast=fast.next.next;
            }
            System.out.println("\n The Middle element of List is "+slow.data);
        }
    }
    public void palindrome(){
        Node slow=head,fast=head;
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        Node secondhalf=reverse(slow);
        Node firsthalf=head;boolean palin=true;
        while(secondhalf!=null){
            if(firsthalf.data!=secondhalf.data){
                palin=false;break;
            }
            secondhalf=secondhalf.next;
            firsthalf=firsthalf.next;
        }
        reverse(secondhalf);
        if(palin){System.out.println("\n Linked List is a Palindrome");}
        else{System.out.println("\n Linked List is not a palindrome");}
    }
    private Node reverse(Node node){
        Node prev=null;
        Node curr=node;
        while(curr!=null){
            Node next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        return prev;
    }
    public void reverseList(){
        Node curr=head;Node prev=null;
        System.out.println("\nThe Reverse of Linked List is ");
        while(curr!=null){
            Node next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        head=prev;
    }
    public void removeNodeFromLast(int p){
        Node dummy=new Node(0);
        dummy.next=head;
        Node slow=dummy,fast=dummy;
        for(int i=0;i<=p;i++){
            fast=fast.next;
        }
        while(fast!=null){
            fast=fast.next;
            slow=slow.next;
        }
        if(slow.next!=null){
            slow.next=slow.next.next;
        }
        head=dummy.next;
    }
    public void cyclelist(){
        Node slow=head;
        Node fast=head;boolean flag=false;
        while(fast!=null && fast.next!=null){
            fast=fast.next.next;
            slow=slow.next;
            if(slow==fast){
                flag=true;
            }
        }
        if(flag){System.out.println("\nThe Linked List forms a cycle.");}
        else{
            System.out.println("\nThe linked List does not forms a cycle");
        }
    }
}
public class SinglyInsertionDeletion{
    public static void main(String[] args){
        LinkedList l = new LinkedList();
        l.insertEnd(10);
        l.insertEnd(15);
        l.insertEnd(5);
        l.insertBeging(25);
        l.insertMiddle(3,10);
        l.display();
        l.search(25);
        l.middleElement();
        l.display();
        l.palindrome();
        //l.reverseList();
       
        l.removeNodeFromLast(2);
         l.display();
        l.cyclelist();
    }
}