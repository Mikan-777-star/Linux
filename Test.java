import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;


public class Test {
    public static void main(String[] args) {
        System.out.println("ファイル名を指定してください。");
        String s = System.console().readLine();
        System.out.println("中身を書き込んで言ってください\n（exitで終了）");
        try(BufferedReader br = new BufferedReader(new java.io.InputStreamReader(System.in));
            Writer w = new BufferedWriter(new FileWriter(s))){
            String str;
            while(!"exit".equals(str = br.readLine())){
                w.write(str);
                w.write(System.lineSeparator());
            }
            w.flush();
        }catch(IOException e){
            e.printStackTrace();
        }
    }
}
