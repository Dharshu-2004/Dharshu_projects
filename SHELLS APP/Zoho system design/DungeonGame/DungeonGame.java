import java.util.Scanner;

public class DungeonGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Get grid size
        System.out.println("Enter grid size (rows columns):");
        int rows = sc.nextInt();
        int cols = sc.nextInt();
        
        char[][] dungeon = new char[rows][cols];
        // Initialize dungeon with empty spaces
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                dungeon[i][j] = '.';
            }
        }
        
        // Get positions for each component
        System.out.println("Enter Adventurer position (row column):");
        int aRow = sc.nextInt();
        int aCol = sc.nextInt();
        dungeon[aRow][aCol] = 'A';
        
        System.out.println("Enter Monster position (row column):");
        int mRow = sc.nextInt();
        int mCol = sc.nextInt();
        dungeon[mRow][mCol] = 'M';
        
        System.out.println("Enter Trigger position (row column):");
        int tRow = sc.nextInt();
        int tCol = sc.nextInt();
        dungeon[tRow][tCol] = 'T';
        
        System.out.println("Enter Treasure position (row column):");
        int trRow = sc.nextInt();
        int trCol = sc.nextInt();
        dungeon[trRow][trCol] = 'X';
        
        System.out.println("Enter number of pits:");
        int pits = sc.nextInt();
        for(int i = 0; i < pits; i++) {
            System.out.println("Enter pit " + (i+1) + " position (row column):");
            int pRow = sc.nextInt();
            int pCol = sc.nextInt();
            dungeon[pRow][pCol] = 'P';
        }
        
        // Print the dungeon
        System.out.println("\nDungeon Layout:");
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                System.out.print(dungeon[i][j] + " ");
            }
            System.out.println();
        }
        
        // Calculate distances
        int adventurerToTrigger = Math.abs(aRow - tRow) + Math.abs(aCol - tCol);
        int monsterToTrigger = Math.abs(mRow - tRow) + Math.abs(mCol - tCol);
        int adventurerToTreasure = Math.abs(aRow - trRow) + Math.abs(aCol - trCol);
        int monsterToTreasure = Math.abs(mRow - trRow) + Math.abs(mCol - trCol);
        
        // Determine outcome
        System.out.println("\nResult:");
        if (adventurerToTrigger < monsterToTrigger) {
            System.out.println("Adventurer reaches the trigger first!");
            System.out.println("Monster is frozen!");
            System.out.println("Adventurer can safely reach the treasure!");
            // Mission Possible - Adventurer wins via trigger
        } else if (adventurerToTrigger > monsterToTrigger) {
            System.out.println("Monster reaches the trigger first!");
            System.out.println("Trigger is deactivated!");
            // Check if Adventurer can still reach treasure before Monster
            if (adventurerToTreasure < monsterToTreasure) {
                System.out.println("Adventurer can still reach the treasure before the monster!");
                // Mission Possible
            } else {
                System.out.println("Monster will catch the adventurer!");
                // Mission Impossible
            }
        } else {
            // If they reach trigger at same time, fall back to direct treasure distance
            if (adventurerToTreasure < monsterToTreasure) {
                System.out.println("Adventurer can reach the treasure before the monster!");
                // Mission Possible
            } else {
                System.out.println("Monster will catch the adventurer!");
                // Mission Impossible
            }
        }
        
        sc.close();
    }
}

/* Sample Input and Output:
Enter grid size: 5 5
Enter Adventurer position: 0 0
Enter Monster position: 4 4
Enter Trigger position: 2 2
Enter Treasure position: 1 1
Enter number of pits: 2
Enter pit 1 position: 1 2
Enter pit 2 position: 3 3

Dungeon Layout:
A . . . .
. X P . .
. . T . .
. . . P .
. . . . M

Result:
Adventurer can reach the treasure before the monster!
*/
