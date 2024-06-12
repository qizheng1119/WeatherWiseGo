package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class map_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<html class=\"h-100 m-0 p-0\">\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <title>Map</title>\n");
      out.write("        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("        <script src=\"https://kit.fontawesome.com/e5d1e9c2bf.js\" crossorigin=\"anonymous\"></script>\n");
      out.write("        <style>\n");
      out.write("            .searchBorder{\n");
      out.write("                border-width: 2px;\n");
      out.write("                border-color: black;\n");
      out.write("                background-color: white;\n");
      out.write("            }\n");
      out.write("            .sidenav {\n");
      out.write("                height: 400px;\n");
      out.write("                width: 0;\n");
      out.write("                overflow-x: hidden;\n");
      out.write("                overflow: hidden;\n");
      out.write("                transition: 0.5s;\n");
      out.write("                border-style: solid;\n");
      out.write("                border-color: black;\n");
      out.write("                border-width: 2px;\n");
      out.write("                border-top-right-radius:10px;\n");
      out.write("                border-bottom-right-radius:10px;\n");
      out.write("            }\n");
      out.write("            .clsbutton{\n");
      out.write("                right: 20px;\n");
      out.write("            }\n");
      out.write("        </style>\n");
      out.write("    </head>\n");
      out.write("    <body class=\"h-100 m-0 p-0\">\n");
      out.write("        <header>");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "header.jsp", out, false);
      out.write("</header>\n");
      out.write("        <div style=\"margin-top: 100px; width: 35%\" class=\"z-1 position-absolute ms-5\">\n");
      out.write("            <div class=\"row\">\n");
      out.write("                <div class=\"col-md-12 h-25\">\n");
      out.write("                    <form class=\"ms-2 form-horizontal w-100\">\n");
      out.write("                        <div id=\"origin\" style=\"display:none\" class=\"input-group align-items-center justify-content-center\">\n");
      out.write("                            <i class=\"fa-solid fa-circle-dot me-3 mb-2\"></i>\n");
      out.write("                            <input type=\"text\" id=\"from\" placeholder=\"Origin\" class=\"form-control mb-3 searchBorder\">\n");
      out.write("                        </div>\n");
      out.write("\n");
      out.write("                        <div class=\"input-group d-flex align-items-center justify-content-center\">\n");
      out.write("                            <i class=\"fa-solid fa-location-dot me-3\"></i>\n");
      out.write("                            <input type=\"text\" id=\"to\" class=\"form-control searchBorder\" placeholder=\"Get Location\">\n");
      out.write("                            <div class=\"input-group-append\">\n");
      out.write("                                <button id=\"searchButton\" class=\"btn btn-outline-secondary searchBorder\" type=\"button\" style=\"border-top-left-radius: 0;border-bottom-left-radius: 0;\" onClick=\"showPlace()\">\n");
      out.write("                                    <i class=\"fa fa-search\"></i>\n");
      out.write("                                </button>\n");
      out.write("                            </div>\n");
      out.write("                            <span class=\"ms-2\" onclick=\"openOriginInput()\">\n");
      out.write("                                <i class=\"fa-solid fa-location-arrow\"></i>\n");
      out.write("                            </span> \n");
      out.write("                        </div>\n");
      out.write("                    </form>          \n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"z-1 position-absolute\" style=\"margin-top:300px\" id=\"expandButton\">\n");
      out.write("        </div>\n");
      out.write("        <div class=\"z-2 position-absolute\" style=\"margin-top:300px\" id=\"displayDetail\">\n");
      out.write("        </div>\n");
      out.write("        <div class=\"h-100\" id=\"map\"></div>\n");
      out.write("        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n");
      out.write("        <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyDDfFI68giTw1X5a77tigXlzKMMqrGLYyg&libraries=places,marker&loading=async&callback=initMap\"></script>\n");
      out.write("        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>\n");
      out.write("        <script src=\"map.js\"></script>\n");
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
