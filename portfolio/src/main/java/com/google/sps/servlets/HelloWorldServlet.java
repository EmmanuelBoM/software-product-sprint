package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello-world")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] quotes = {"But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.", "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", "It is the quality of one's convictions that determines success, not the number of followers.", "The best way to predict the future is to invent it"};
    String json = convertToJsonUsingGson(quotes);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }


   private String convertToJsonUsingGson(String[] quotes) {
    Gson gson = new Gson();
    String json = gson.toJson(quotes);
    return json;
  }
}
