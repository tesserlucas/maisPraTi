public class CardGameApp {
    public static void main(String[] args) {
        CardHand hand = new CardHand();

        // Adicionando cartas
        hand.addCard("Ás de Espadas");
        hand.addCard("Rei de Copas");
        hand.addCard("Dois de Ouros");

        // Mostrando cartas
        System.out.println("Mão inicial:");
        hand.printHand();

        // Removendo uma carta
        hand.removeCard("Rei de Copas");
        System.out.println("\nMão após remover o Rei de Copas:");
        hand.printHand();

        // Reorganizando as cartas
        hand.addCard("Três de Paus");
        hand.moveCard("Três de Paus", 1); // Movendo para a segunda posição
        System.out.println("\nMão após adicionar e mover o Três de Paus:");
        hand.printHand();
    }
}

class Node {
    String card;
    Node prev;
    Node next;

    public Node(String card) {
        this.card = card;
        this.prev = null;
        this.next = null;
    }
}

class CardHand {
    private Node head;
    private Node tail;

    public void addCard(String card) {
        Node newNode = new Node(card);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }

    public void removeCard(String card) {
        Node current = head;
        while (current != null) {
            if (current.card.equals(card)) {
                if (current.prev != null) {
                    current.prev.next = current.next;
                } else {
                    head = current.next;
                }
                if (current.next != null) {
                    current.next.prev = current.prev;
                } else {
                    tail = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    public void moveCard(String card, int position) {
        Node current = head;
        int currentIndex = 0;
        while (current != null && !current.card.equals(card)) {
            current = current.next;
            currentIndex++;
        }
        if (current == null) return; // Card not found

        // Remove the card
        if (current.prev != null) {
            current.prev.next = current.next;
        } else {
            head = current.next; // Move head if necessary
        }
        if (current.next != null) {
            current.next.prev = current.prev;
        } else {
            tail = current.prev; // Move tail if necessary
        }

        // Reinsert the card at the specified position
        if (position == 0) {
            current.next = head;
            head.prev = current;
            head = current;
            current.prev = null;
        } else {
            Node temp = head;
            int i = 1;
            while (i < position && temp.next != null) {
                temp = temp.next;
                i++;
            }
            current.next = temp.next;
            current.prev = temp;
            if (temp.next != null) {
                temp.next.prev = current;
            } else {
                tail = current;
            }
            temp.next = current;
        }
    }

    public void printHand() {
        Node current = head;
        while (current != null) {
            System.out.print(current.card + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}
