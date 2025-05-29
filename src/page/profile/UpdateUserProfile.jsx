import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ApiService from "@/config/ApiConfig";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

const UpdateUserProfile = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const fetchUser = async () => {
    try {
      const res = await ApiService.getUserProfile();
      const user = res.findUser;

      // Extract userId from response if available
      let userIdFromResponse = null;
      let profile = null;

      // If it's an array
      if (Array.isArray(user) && user.length > 0) {
        profile = user[0];
        userIdFromResponse = profile._id || profile.id;
      }
      // If it's a single object
      else if (user && typeof user === "object") {
        profile = user;
        userIdFromResponse = user._id || user.id;
      } else {
        toast.error("Unexpected user data format.");
        return;
      }

      // Set userId from response or fallback to localStorage
      const finalUserId = userIdFromResponse || localStorage.getItem("userId");
      
      if (!finalUserId) {
        toast.error("User ID not found. Please log in again.");
        return;
      }

      setUserId(finalUserId);
      setForm((prev) => ({
        ...prev,
        username: profile.username || "",
        email: profile.email || "",
        phoneNumber: profile.phoneNumber || "",
        address: profile.address || "",
        role: profile.role || "",
      }));
    } catch (err) {
      toast.error("Failed to fetch user data");
      console.error("Fetch user error:", err);
    }
  };

  useEffect(() => {
    if (open) fetchUser();
  }, [open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validate userId before making the request
    if (!userId) {
      toast.error("User ID not found. Please log in again.");
      return;
    }

    // Validate password confirmation if password is being changed
    if (form.password && form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      // Create a clean form object without confirmPassword and empty password
      const updateData = { ...form };
      delete updateData.confirmPassword;
      
      // Remove password if it's empty
      if (!updateData.password || updateData.password.trim() === "") {
        delete updateData.password;
      }

      await ApiService.updateUserById(userId, updateData);
      toast.success("Profile updated successfully!");
      setOpen(false);
    } catch (err) {
      toast.error("Failed to update profile");
      console.error("Update profile error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Your Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input placeholder="Username" name="username" value={form.username} onChange={handleChange} />
          <Input placeholder="Email" name="email" value={form.email} onChange={handleChange} type="email" />
          <Input placeholder="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
          <Input placeholder="Address" name="address" value={form.address} onChange={handleChange} />
          <Input placeholder="Role" name="role" value={form.role} onChange={handleChange} />
          <Input placeholder="New Password (leave blank to keep current)" name="password" value={form.password} onChange={handleChange} type="password" />
          <Input placeholder="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" />
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={handleSubmit} disabled={isLoading || !userId}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update"
            )}
          </Button>
        </DialogFooter>
        <Toaster position="bottom-right" richColors />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserProfile;