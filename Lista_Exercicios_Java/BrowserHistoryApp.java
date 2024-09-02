public class BrowserHistoryApp {
    public static void main(String[] args) {
        BrowserHistory history = new BrowserHistory(5); // Capacidade para 5 URLs

        history.visit("http://example.com");
        history.visit("http://openai.com");
        history.visit("http://google.com");
        history.visit("http://facebook.com");
        history.visit("http://youtube.com");
        history.visit("http://twitter.com"); // Isso deve remover "http://example.com"

        System.out.println("Histórico atual:");
        history.printHistory();
    }
}

class Node {
    String url;
    Node next;

    public Node(String url) {
        this.url = url;
        this.next = null;
    }
}

class BrowserHistory {
    Node head;
    int size;
    int capacity; // Capacidade máxima do histórico

    public BrowserHistory(int capacity) {
        this.head = null;
        this.size = 0;
        this.capacity = capacity;
    }

    public void visit(String url) {
        Node newNode = new Node(url);
        newNode.next = head;
        head = newNode;
        size++;
        if (size > capacity) {
            removeOldest();
        }
    }

    private void removeOldest() {
        if (head == null) return;
        Node current = head;
        while (current.next != null && current.next.next != null) {
            current = current.next;
        }
        if (current.next != null) {
            current.next = null;
        } else {
            head = null;
        }
        size--;
    }

    public void printHistory() {
        Node current = head;
        while (current != null) {
            System.out.println(current.url);
            current = current.next;
        }
    }
}
