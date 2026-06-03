import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                "service_gce9xnr",
                "template_ek40ldl",
                data,
                "wF04i0FgL3MgmQ8Sx"
            );
            toast.success("Message sent! I'll get back to you soon.");
            reset();
        } catch (err) {
            const reason = err?.text || err?.message || "Unknown error";
            toast.error(`Failed to send: ${reason}`);
        }
    };

    return (
        <div className="query-form">
            <ToastContainer position="bottom-right" theme="dark" />
            <h3 className="form-title">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-row">
                    <div className="input-field">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register("from_name", { required: "Name is required" })}
                        />
                        {errors.from_name && <p className="error">{errors.from_name.message}</p>}
                    </div>

                    <div className="input-field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            {...register("reply_to", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.reply_to && <p className="error">{errors.reply_to.message}</p>}
                    </div>
                </div>

                <div className="input-field">
                    <label>Subject</label>
                    <input
                        type="text"
                        placeholder="What's this about?"
                        {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <p className="error">{errors.subject.message}</p>}
                </div>

                <div className="input-field">
                    <label>Message</label>
                    <textarea
                        className="textarea"
                        placeholder="Tell me about your project or opportunity..."
                        {...register("message", {
                            required: "Message is required",
                            minLength: { value: 10, message: "Please write at least 10 characters" },
                            maxLength: { value: 1000, message: "Maximum 1000 characters" },
                        })}
                    />
                    {errors.message && <p className="error">{errors.message.message}</p>}
                </div>

                <button className="formbutton" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default Form;
