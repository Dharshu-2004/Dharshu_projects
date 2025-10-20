import java.util.*;
public class Booking {
    public static void bookTaxi(int customer_id, char pickpoint, char droppoint, int picktime,List<Taxi> freeTaxis){
        int min=999;
        int earning=0;
        char nextstop='Z';
        int nextfreetime=0;
        Taxi booking = null;
        String tripDetails="";
        for(Taxi t: freeTaxis){
           
            int distancebetweenCustomerandTaxi= Math.abs((t.currentspot-'0')-(pickpoint-'0'))*15;
            if(distancebetweenCustomerandTaxi<min){
                 booking=t;
                int distancebetweenPickandDrop= Math.abs((pickpoint-'0')-(droppoint-'0'))*15;
                earning = (distancebetweenPickandDrop-5)*10+100;
                nextstop=droppoint;
                int droptime=picktime+Math.abs((pickpoint-'0')-(droppoint-'0'));
                nextfreetime=droptime;

                tripDetails=customer_id+"        "+customer_id+"         "+pickpoint+"          "+droppoint+"          "+picktime+"         "+earning;
            }
        }
        booking.setDetails(true, nextstop, nextfreetime, booking.totalearning+earning, tripDetails);
        System.out.println("Taxi "+booking.id+" Alloted");
    }
    public static List<Taxi> createTaxis(int n){
        List<Taxi> taxis= new ArrayList<Taxi>();
        for(int i=0;i<n;i++){
            Taxi t= new Taxi();
            taxis.add(t);
        }
        return taxis;
    }
    public static List<Taxi> getfreetaxi(char pickpoint, char droppoint, int picktime,List<Taxi> taxis){
        List<Taxi> freetaxi=new ArrayList<Taxi>();
        for(Taxi t:taxis){
            if(t.freetime<=picktime && (Math.abs((t.currentspot-'0')-(pickpoint-'0'))<=(picktime-t.freetime))){
                freetaxi.add(t);
            }
        }
        return freetaxi;

    }
    public static void main(String[] args){
        Scanner sc= new Scanner(System.in);
        List<Taxi> taxis= createTaxis(4);
        int id=1;
        while(true){
            System.out.println("0 Booking Taxi");
            System.out.println("1 View Taxi Details");
            System.out.println("Enter your choice:");
            int choice=sc.nextInt();
            switch(choice){
                case 0:
                {
                    int customer_id=id;
                    System.out.println("Enter the Pick up Point");
                    char pickpoint=sc.next().charAt(0);
                    System.out.println("Enter the Droping Point");
                    char droppoint = sc.next().charAt(0);
                    System.out.println("Enter the Pick Up Time ");
                    int picktime=sc.nextInt();

                    List<Taxi> freetaxi=getfreetaxi(pickpoint,droppoint,picktime,taxis);
                    if(freetaxi.isEmpty())
                    {
                        System.out.println("No booking is Alloted");
                        return;
                    }
                    Collections.sort(freetaxi,(a,b)->a.totalearning-b.totalearning);
                    
                    bookTaxi(id,pickpoint,droppoint,picktime,freetaxi);
                    id++;
                    break;
                }
                case 1:
                {
                    for(Taxi t:taxis){
                        t.printDetails();
                    }
                    for(Taxi t:taxis){
                        t.printTaxiDetails();
                    }
                    break;
                }
                default:
                     return;

            }
            
        }
        
        
    }
    
}
