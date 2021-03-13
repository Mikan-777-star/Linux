import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.Writer;

public class Write{
    public static void main(String[] args) {
        System.out.println("ファイル名を指定してね");
        try (BufferedReader br = new BufferedReader(new java.io.InputStreamReader(System.in));
            Writer w = new BufferedWriter(new FileWriter(System.console().readLine()))) {
            System.out.println("中身を書いていってね(exitで終了)");
            String str;
            while("exit".equals(str = br.readLine())){
                w.write(str);
                w.write('\n');
            }
            w.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}