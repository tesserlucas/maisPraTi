public class TextEditorApp {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        
        editor.type("Primeira linha do texto.\n");
        editor.type("Segunda linha do texto.\n");
        
        System.out.println("Conteúdo Atual:");
        System.out.println(editor.getContent());
        
        editor.undo();
        System.out.println("Conteúdo após um undo:");
        System.out.println(editor.getContent());
        
        editor.redo();
        System.out.println("Conteúdo após um redo:");
        System.out.println(editor.getContent());
        
        editor.type("Terceira linha do texto.\n");
        System.out.println("Conteúdo após adicionar outra linha:");
        System.out.println(editor.getContent());
        
        editor.undo();
        System.out.println("Conteúdo após um undo:");
        System.out.println(editor.getContent());
    }
}

class Node {
    String data;
    Node prev;
    Node next;

    public Node(String data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class UndoRedoManager {
    private Node current;

    public UndoRedoManager() {
        current = new Node(""); // Inicializa com estado vazio
    }

    public void saveState(String data) {
        Node newState = new Node(data);
        newState.prev = current;
        if (current != null) {
            current.next = newState;
        }
        current = newState;
    }

    public String undo() {
        if (current != null && current.prev != null) {
            current = current.prev;
            return current.data;
        }
        return null; // Não há mais estados para desfazer
    }

    public String redo() {
        if (current != null && current.next != null) {
            current = current.next;
            return current.data;
        }
        return null; // Não há mais estados para refazer
    }
}

class TextEditor {
    private StringBuilder content;
    private UndoRedoManager undoRedoManager;

    public TextEditor() {
        content = new StringBuilder();
        undoRedoManager = new UndoRedoManager();
    }

    public void type(String text) {
        content.append(text);
        undoRedoManager.saveState(content.toString());
    }

    public void undo() {
        String lastState = undoRedoManager.undo();
        if (lastState != null) {
            content = new StringBuilder(lastState);
        }
    }

    public void redo() {
        String nextState = undoRedoManager.redo();
        if (nextState != null) {
            content = new StringBuilder(nextState);
        }
    }

    public String getContent() {
        return content.toString();
    }
}
