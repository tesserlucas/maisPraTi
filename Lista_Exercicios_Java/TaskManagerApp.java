public class TaskManagerApp {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();
        
        manager.addTask("Estudar Java");
        manager.addTask("Ir ao mercado");
        manager.addTask("Pagar contas");

        manager.listTasks();

        manager.completeTask("Ir ao mercado");
        manager.removeTask("Pagar contas");

        System.out.println("\nApós alterações:");
        manager.listTasks();
    }
}

class Node {
    String task;
    boolean isCompleted;
    Node next;

    public Node(String task) {
        this.task = task;
        this.isCompleted = false;
        this.next = null;
    }
}

class TaskManager {
    Node head;

    public TaskManager() {
        this.head = null;
    }

    public void addTask(String task) {
        Node newNode = new Node(task);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public void removeTask(String task) {
        Node current = head;
        Node previous = null;

        while (current != null && !current.task.equals(task)) {
            previous = current;
            current = current.next;
        }

        if (current == null) {
            System.out.println("Tarefa não encontrada.");
            return;
        }

        if (previous == null) {
            head = head.next;
        } else {
            previous.next = current.next;
        }
        System.out.println("Tarefa removida: " + task);
    }

    public void completeTask(String task) {
        Node current = head;
        while (current != null) {
            if (current.task.equals(task)) {
                current.isCompleted = true;
                System.out.println("Tarefa concluída: " + task);
                return;
            }
            current = current.next;
        }
        System.out.println("Tarefa não encontrada.");
    }

    public void listTasks() {
        Node current = head;
        if (current == null) {
            System.out.println("Nenhuma tarefa cadastrada.");
            return;
        }
        while (current != null) {
            System.out.println("Tarefa: " + current.task + " - " + (current.isCompleted ? "Concluída" : "Pendente"));
            current = current.next;
        }
    }
}
