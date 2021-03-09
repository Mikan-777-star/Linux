import java.io.File;

public class Copy{
    public static void main(String[] args) {
        File file = new File("~/workspace/node-js-http-3013/"+System.console().readLine());
        System.out.println(file.exists());
    }
}