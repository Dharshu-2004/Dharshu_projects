import java.util.*;

public class TicketSystem {
    private final List<String> availableBerths = new ArrayList<>(Arrays.asList("L", "U", "M")); // 3 berths
    private final Queue<Passenger> racQueue = new LinkedList<>(); // 1 RAC berth
    private final Queue<Passenger> waitingListQueue = new LinkedList<>(); // 1 waiting list
    private final List<Passenger> confirmedPassengers = new ArrayList<>();
    private int ticketCounter = 1;

    public void bookTicket(String name, int age, String gender, String berthPreference) {
        String ticketId = "T" + ticketCounter++;
        Passenger passenger;

        if (!availableBerths.isEmpty()) {
            String allocatedBerth = allocateBerth(age, gender, berthPreference);
            passenger = new Passenger(name, age, gender, berthPreference, allocatedBerth, ticketId);
            confirmedPassengers.add(passenger);
            availableBerths.remove(allocatedBerth);
            System.out.println("Ticket confirmed: " + passenger);
        } else if (racQueue.size() < 1) {
            passenger = new Passenger(name, age, gender, berthPreference, "RAC", ticketId);
            racQueue.offer(passenger);
            System.out.println("Ticket in RAC: " + passenger);
        } else if (waitingListQueue.size() < 1) {
            passenger = new Passenger(name, age, gender, berthPreference, "Waiting List", ticketId);
            waitingListQueue.offer(passenger);
            System.out.println("Ticket in Waiting List: " + passenger);
        } else {
            System.out.println("No tickets available");
        }
    }

    private String allocateBerth(int age, String gender, String preference) {
        if (age > 60 || gender.equalsIgnoreCase("female") && availableBerths.contains("L")) {
            return "L";
        }
        if (availableBerths.contains(preference)) {
            return preference;
        }
        return availableBerths.get(0); // Allocate the first available berth
    }

    public void cancelTicket(String ticketId) {
        Optional<Passenger> passengerOpt = confirmedPassengers.stream()
                .filter(p -> p.ticketId.equals(ticketId))
                .findFirst();

        if (passengerOpt.isPresent()) {
            Passenger passenger = passengerOpt.get();
            confirmedPassengers.remove(passenger);
            availableBerths.add(passenger.allottedBerth);

            if (!racQueue.isEmpty()) {
                Passenger racPassenger = racQueue.poll();
                String allocatedBerth = allocateBerth(racPassenger.age, racPassenger.gender, racPassenger.berthPreference);
                racPassenger.allottedBerth = allocatedBerth;
                confirmedPassengers.add(racPassenger);
                availableBerths.remove(allocatedBerth);
                System.out.println("RAC ticket moved to confirmed: " + racPassenger);
            }
            if (!waitingListQueue.isEmpty()) {
                Passenger waitingPassenger = waitingListQueue.poll();
                racQueue.offer(waitingPassenger);
                waitingPassenger.allottedBerth = "RAC";
                System.out.println("Waiting list ticket moved to RAC: " + waitingPassenger);
            }
            System.out.println("Ticket cancelled successfully for ID: " + ticketId);
        } else {
            System.out.println("No ticket found with ID: " + ticketId);
        }
    }

    public void printBookedTickets() {
        if (confirmedPassengers.isEmpty()) {
            System.out.println("No confirmed tickets.");
        } else {
            System.out.println("Confirmed Tickets:");
            for (Passenger passenger : confirmedPassengers) {
                System.out.println(passenger);
            }
        }
    }

    public void printAvailableTickets() {
        System.out.println("Available Berths: " + availableBerths.size());
        System.out.println("Available RAC Tickets: " + (1 - racQueue.size()));
        System.out.println("Available Waiting List Tickets: " + (1 - waitingListQueue.size()));
    }

    public void viewRacTickets() {
        if (racQueue.isEmpty()) {
            System.out.println("No RAC tickets.");
        } else {
            System.out.println("RAC Tickets:");
            for (Passenger passenger : racQueue) {
                System.out.println(passenger);
            }
        }
    }

    public void viewWaitingListTickets() {
        if (waitingListQueue.isEmpty()) {
            System.out.println("No Waiting List tickets.");
        } else {
            System.out.println("Waiting List Tickets:");
            for (Passenger passenger : waitingListQueue) {
                System.out.println(passenger);
            }
        }
    }
}
