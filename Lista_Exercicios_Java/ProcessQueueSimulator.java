import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

public class ProcessQueueSimulator {
     public static void main(String[] args) {
        ProcessQueue processQueue = new ProcessQueue();

        // Adicionando processos à fila
        processQueue.addProcess("Processo 1");
        processQueue.addProcess("Processo 2");
        processQueue.addProcess("Processo 3");

        // Removendo e executando o processo mais antigo
        processQueue.runNextProcess();

        // Continuando a adicionar e executar processos
        processQueue.addProcess("Processo 4");
        processQueue.runNextProcess();
        processQueue.runNextProcess();
        processQueue.runNextProcess(); // Deve indicar que não há mais processos
    }
}

class ProcessQueue {
    private Queue<String> queue;

    public ProcessQueue() {
        this.queue = new LinkedList<>();
    }

    public void addProcess(String process) {
        queue.add(process);
        System.out.println("Processo adicionado: " + process);
    }

    public void runNextProcess() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum processo na fila para execução.");
        } else {
            String process = queue.poll();
            System.out.println("Executando: " + process);
            simulateProcessExecution();
        }
    }

    private void simulateProcessExecution() {
        try {
            Random rand = new Random();
            int executionTime = 1000 + rand.nextInt(2000); // Simula tempo de execução entre 1 e 3 segundos
            Thread.sleep(executionTime);
            System.out.println("Processo concluído após " + executionTime + "ms");
        } catch (InterruptedException e) {
            System.out.println("Execução interrompida.");
        }
    }
}
