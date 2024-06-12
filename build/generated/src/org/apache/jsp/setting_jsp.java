package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class setting_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("        <title>User Profile</title>\n");
      out.write("        <script src=\"https://cdn.tailwindcss.com\"></script>\n");
      out.write("        <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n");
      out.write("    </head>\n");
      out.write("    <body class=\"bg-gray-100 min-h-screen flex flex-col\">\n");
      out.write("        <header>");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "header.jsp", out, false);
      out.write("</header>\n");
      out.write("        <div class=\"bg-gray-800 text-white flex justify-between items-center p-4\">\n");
      out.write("            <span>User 12344</span>\n");
      out.write("            <span><img src=\"profile-icon.png\" alt=\"Profile Icon\" class=\"w-10 h-10 rounded-full\"></span>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"w-auto h-auto flex flex-grow items-center justify-center\">\n");
      out.write("            <div class=\"bg-white w-4/5 rounded-lg shadow-lg flex overflow-hidden mt-4\">\n");
      out.write("                <!-- Left Container -->\n");
      out.write("                <div class=\"bg-blue-200 w-1/5 m-4 p-6 flex flex-col justify-between rounded-lg\">\n");
      out.write("                    <div>\n");
      out.write("                        <h1 class=\"text-2xl font-bold mb-4\">Profile</h1>\n");
      out.write("                        <div class=\"flex items-center justify-between mb-4\">\n");
      out.write("                            <button class=\"w-3/4 bg-blue-500 text-white py-2 px-4 rounded-lg\">\n");
      out.write("                                Setting\n");
      out.write("                            </button>\n");
      out.write("                            <span class=\"material-icons ml-2\">settings</span>\n");
      out.write("                        </div>\n");
      out.write("                        <div class=\"flex items-center justify-between mb-4\">\n");
      out.write("                            <button class=\"w-3/4 bg-blue-500 text-white py-2 px-4 rounded-lg\">\n");
      out.write("                                Notification\n");
      out.write("                            </button>\n");
      out.write("                            <span class=\"material-icons ml-2\">notifications</span>\n");
      out.write("                        </div>\n");
      out.write("                    </div>\n");
      out.write("                    <button class=\"w-full bg-red-500 text-white py-2 rounded-lg\">Log out</button>\n");
      out.write("                </div>\n");
      out.write("                <!-- Right Container -->\n");
      out.write("                <div class=\"w-4/5 p-6 flex flex-col items-center\">\n");
      out.write("                    <img src=\"profile-icon.png\" alt=\"User Image\" class=\"w-20 h-20 rounded-full mb-4\">\n");
      out.write("                    <h2 class=\"text-2xl font-bold mb-6\">User 12344</h2>\n");
      out.write("                    <div class=\"bg-blue-100 p-4 rounded-lg w-full\">\n");
      out.write("                        <p class=\"mb-2\"><strong>Email:</strong> yowoo.gmail.com</p>\n");
      out.write("                        <p><strong>Phone No.:</strong> 0192817777</p>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"text-center mt-6 text-sm text-gray-600\">\n");
      out.write("            &copy; 2024 Dragon team\n");
      out.write("        </div>\n");
      out.write("        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n");
      out.write("        <script src=\"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit\"></script>\n");
      out.write("        <script src=\"setting.js\"></script>\n");
      out.write("    </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
