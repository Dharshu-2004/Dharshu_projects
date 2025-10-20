import java.util.*;
public class Taxi{
    static int  taxicount=0;
    int id;
    char currentspot;
    boolean booked;
    int freetime;
    int totalearning;
    List<String> trips;

    public Taxi(){
        booked=false;
        currentspot='A';
        freetime=6;//from 6am
        totalearning=0;
        taxicount=taxicount+1;
        id=taxicount;
        trips = new ArrayList<String>();
    }
    public void setDetails(boolean booked,char currentspot,int freetime,int totalearning,String tripDetails){
        this.booked=booked;
        this.currentspot=currentspot;
        this.freetime=freetime;
        this.totalearning=totalearning;
        this.trips.add(tripDetails);
    }
    public void printDetails(){
        System.out.println("Taxi-"+this.id+"   Earnings: "+this.totalearning);
        System.out.println("Taxi id   Booking id    Customer id      PickPoint   DropPoint    PickupTime    Amount");
        for(String trip : trips){
            System.out.println(id+"        "+trip);
        }
        System.out.println("----------------------------------------------------------------------");
    } 
    public void printTaxiDetails(){
        System.out.println("Taxi: "+this.id+" Current Spot: "+this.currentspot+" free time: "+this.freetime+" earnings: "+this.totalearning);
    }
}