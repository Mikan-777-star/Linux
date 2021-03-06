import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

public class Add_js{
    public static void main(String[] args) {
        File f1 =null;
        int i = 1;
        while((f1 = new File("Test"+i+".js")).exists()) i++;
        try (OutputStream os = new FileOutputStream(f1)) {
            os.write("\'use strict\';\n".getBytes());
            os.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}