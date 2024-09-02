import java.util.LinkedList;
import java.util.Queue;

public class BankQueueSimulator {
    public static void main(String[] args) {
        BankQueue bankQueue = new BankQueue();

        // Adicionando clientes à fila
        bankQueue.enqueue("Cliente 1");
        bankQueue.enqueue("Cliente 2");
        bankQueue.enqueue("Cliente 3");

        // Atendendo clientes
        bankQueue.serveNext();
        bankQueue.serveNext();
        bankQueue.serveNext();

        // Tentativa de atender outro cliente quando a fila está vazia
        bankQueue.serveNext();
    }
}

class BankQueue {
    private Queue<String> queue;

    public BankQueue() {
        this.queue = new LinkedList<>();
    }

    public void enqueue(String customer) {
        queue.add(customer);
        System.out.println(customer + " entrou na fila.");
    }

    public void serveNext() {
        if (queue.isEmpty()) {
            System.out.println("Não há mais clientes na fila para atender.");
        } else {
            String customerServed = queue.poll();
            System.out.println(customerServed + " está sendo atendido.");
        }
    }
}
