import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

public class Add_js{
    public static void main(String[] args) {
        if(args.length < 1){
            System.out.println("コマンドラインでファイル名を指定してください");
            System.exit(-1);
        }
        File f1 = new File(args[0]);
        if(f1.exists()){
            System.out.println("そのファイルは既に存在します");
            System.exit(-1);
        }
        try (OutputStream os = new FileOutputStream(f1)) {
            os.write("\'use strict\'".getBytes());
            os.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}