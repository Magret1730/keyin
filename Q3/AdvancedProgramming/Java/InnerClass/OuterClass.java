package InnerClass;

public class OuterClass {
    private String OuterClassMsg;

    OuterClass() {

        this.OuterClassMsg = "This is the constructor of Outer Class Message";
    }

    public String getOuterClassMsg() {
        return this.OuterClassMsg;
    }

    public void setOuterClassMsg(String OuterClassMsg) {
        this.OuterClassMsg = OuterClassMsg;
    }

    public class innerClass {
        private String InnerClassMsg;

        innerClass() {
            this.InnerClassMsg = "This is the constructor of Inner Class Message";
        }

        public void setInnerClassMsg(String s) {
            this.InnerClassMsg = s; 
        }

        public String getInnerClassMsg() {
            return this.InnerClassMsg;
        }
    }
}
