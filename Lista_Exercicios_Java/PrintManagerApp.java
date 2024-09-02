import java.util.LinkedList;
import java.util.Queue;

public class PrintManagerApp {
    public static void main(String[] args) {
        PrintManager printManager = new PrintManager();

        // Adicionando trabalhos de impressão
        printManager.addJob("Documento 1");
        printManager.addJob("Documento 2");
        printManager.addJob("Documento 3");

        // Processando todos os trabalhos de impressão
        printManager.processAllJobs();
    }
}

class PrintManager {
    private Queue<String> printQueue;

    public PrintManager() {
        this.printQueue = new LinkedList<>();
    }

    public void addJob(String document) {
        printQueue.add(document);
        System.out.println("Trabalho de impressão adicionado: " + document);
    }

    public void processJob() {
        if (!printQueue.isEmpty()) {
            String document = printQueue.poll();
            System.out.println("Processando impressão de: " + document);
        } else {
            System.out.println("Nenhum trabalho de impressão na fila.");
        }
    }

    public void processAllJobs() {
        while (!printQueue.isEmpty()) {
            processJob();
        }
    }
}
